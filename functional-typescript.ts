//
// Attempting to write TypeScript in as close to Haskell syntax as possible.
//

type Go = {kind: "Go"}
type Stop = {kind: "Stop"};

type Cmd = Go
         | Stop;

type State = {stopped: boolean, steps: number};
type Domain = State | null;


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
            if (state.stopped) return {stopped: false, steps: state.steps};
            else               return null;
        };
        case "Stop": return (state: State) => {
            if (!state.stopped) return {stopped: true, steps: state.steps};
            else                return null;
        };
    }
};


//
// Testing
//
var domain: Domain = cmd({kind: "Go"})({stopped: true, steps: 0});
console.assert(domain.stopped == false);

domain = cmd({kind: "Stop"})({stopped: false, steps: 0});
console.assert(domain.stopped == true);

domain = cmd({kind: "Go"})({stopped: false, steps: 0});
console.assert(domain == null);

domain = cmd({kind: "Stop"})({stopped: true, steps: 0});
console.assert(domain == null);
