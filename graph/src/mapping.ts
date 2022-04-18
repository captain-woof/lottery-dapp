/* eslint-disable node/no-missing-import */
import {
  GameEnded,
  GameStarted,
  OwnershipTransferred,
  PlayerJoined,
} from "../generated/Lottery DApp V1/LotteryDAppV1";
import { Game } from "../generated/schema";

// Handles GameStarted event
export function handleGameStarted(event: GameStarted): void {
  const gameId = event.params.gameId.toString();
  let game = Game.load(gameId);
  if (!game) {
    game = new Game(gameId);
  }

  game.players = [];
  game.id = event.params.gameId.toString();
  game.maxPlayers = event.params.maxPlayers;
  game.entryFee = event.params.entryFee;
  game.save();
}

// Handles player joined
export function handlePlayerJoined(event: PlayerJoined): void {
  const gameId = event.params.gameId.toString();
  let game = Game.load(gameId);
  if (!game) {
    game = new Game(gameId);
  }

  game.players.push(event.params.player);
  game.save();
}

// Handles GameEnded event
export function handleGameEnded(event: GameEnded): void {
  const gameId = event.params.gameId.toString();
  let game = Game.load(gameId);
  if (!game) {
    game = new Game(gameId);
  }

  game.winner = event.params.winner;
  game.requestId = event.params.requestId;
  game.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
