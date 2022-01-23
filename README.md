# Mobidziennik API
### Mobidziennik API for JavaScript & TypeScript


## Usage

### Initialize client

```ts
import MobiApi from "./MobiApi";

const mobiApi = new MobiApi("https://<school-name>.mobidziennik.pl");
```
#### Async function
```ts
const initializeApi = async () => {
    await mobiApi.signIn("<email>", "<password>");
}

// in some function
await initializeApi();
// ...
```
#### Synchronous function
```ts
mobiApi.signIn("<email>", "<password>").then(() => {
    // ...
});
```

### Get received messages
```ts
const messages = await mobiApi.getRecievedMessages();
```
