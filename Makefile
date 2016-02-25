DEBUG=amqp-match*

test:
	$(MAKE) DEBUG= test-debug

test-debug:
	DEBUG=$(DEBUG) \
	./node_modules/.bin/mocha -R spec --recursive

.PHONY: test test-debug