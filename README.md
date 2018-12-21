# amqp-match

[![Greenkeeper badge](https://badges.greenkeeper.io/mateodelnorte/amqp-match.svg)](https://greenkeeper.io/)

transforms amqp routing keys to regular expressions for more convenient runtime matching
```
  amqp-match
    ✓ should match this.key to this.key (direct equality)
    ✓ should match this.new.key to this.*.key (single word wildcard)
    ✓ should not match this.new.other.key to this.*.key (single word wildcard)
    ✓ should match this.new.kinda.key to this.#.key (multi word wildcard)
    ✓ should not match some.new.kinda.key to this.#.key (single word wildcard)
  ```
