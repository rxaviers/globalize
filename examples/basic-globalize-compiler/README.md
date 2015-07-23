# Basic Globalize Compiler example

On this example, we assume you know the Globalize usage basics. So, we focus on
the Globalize Compiler and on the Globalize runtime modules.

## Running the example

### Development mode

1. Point your browser at `./development.html`. Note that the
formatters are being created dynamically. Cldrjs and CLDR data are
requirements.
1. Understand the demo by reading the source code. We have comments there for
you.

### Production mode

1. Install `globalize-compiler` by running `npm install`.
1. Compile the application formatters by running `npm run build`. See
`package.json` to understand the actual shell command that is used.
1. Point your browser at `./production.html`. Note that we don't need Cldrjs nor
CLDR data in production.
1. Understand the demo by reading the source code. We have comments there for
you.

