//
// Attempting to write TypeScript in as close to Haskell syntax as possible.
//

type Go = {kind: "Go"}
type Stop = {kind: "Stop"};

type Cmd = Go
         | Stop;

type State = boolean;
type Domain = boolean | null;


//
// | Denotational semantics for a simple stop-and-go language.
//   The commands are either Stop or Go.
//   The semantic domain is whether we are stopped (true if last command was Go, false if last command was Stop).
//     Returns null if we attempted to perform the same action that we did before.
//
//   cmd :: Cmd -> State -> Domain
//
var cmd: (a: Cmd) => (state: State) => Domain;
cmd = (a: Cmd) => {
    switch (a.kind) {
        case "Go": return (state: State) => {
            if (!state) return true;
            else return null;
        };
        case "Stop": return (state: State) => {
            if (state) return false;
            else return null;
        };
    }
};


//
// Testing
//
var domain: Domain = cmd({kind: "Go"})(false);
console.assert(domain == true);

domain = cmd({kind: "Stop"})(true);
console.assert(domain == false);

domain = cmd({kind: "Go"})(true);
console.assert(domain == null);

domain = cmd({kind: "Stop"})(false);
console.assert(domain == null);
