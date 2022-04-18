# LOTTERY DAPP

This DApp allows starting a lottery game, which players can then join (upto a specified limit), stake their entry fees, and the winner takes all the stake.

**Deployed on Polygon: [0x765e1309F7EEDc3eA5009b359f82b4A5e47135ed](https://mumbai.polygonscan.com/address/0x765e1309F7EEDc3eA5009b359f82b4A5e47135ed)**

## Description

Like you read above, the game involves players participating in a lottery. The contract uses **Chainlinks's VRF (v1)** to randomly then choose a winner, and award all the collected entry fees combined.

The Graph protocol is used to index all the games that are played, and are queryable at "[https://api.thegraph.com/subgraphs/name/captain-woof/lottery-dapp-v1](https://api.thegraph.com/subgraphs/name/captain-woof/lottery-dapp-v1)".

[Use the playground](https://thegraph.com/hosted-service/subgraph/captain-woof/lottery-dapp-v1?selected=playground) to try out the Graph on the contract.

