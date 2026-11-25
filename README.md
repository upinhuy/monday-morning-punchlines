# Monday Morning Punchlines

[![Make.fun](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/upinhuy/monday-morning-punchlines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/upinhuy/monday-morning-punchlines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)

A single joke about Monday mornings, built for the [Monday Morning Punchlines](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc) bounty on [make.fun](https://make.fun/r/hv9zk8y5). One joke, 200 characters at most, judged on laughs — the funniest joke takes the reward.

## The entry

> Monday morning: my alarm quit, my coffee filed for overtime, and my bed is holding me hostage for a ransom of five more snooze buttons.

The entry is 135 characters, inside the 1–200 character gate. The alarm quits, the coffee files for overtime, and the bed holds its owner hostage for five more snooze buttons — a ransom negotiation, not a Monday complaint.

## How it works

`main.ts` is pure Node.js standard library (no dependencies, no network). It validates the joke against the gate — non-blank, 1 to 200 characters counted as Unicode code points — then writes it to `/output/entry.txt`.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
