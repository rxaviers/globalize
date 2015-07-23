# Basic Globalize Compiler example

On this example, we assume you know the Globalize usage basics. So, it focuses on
the Globalize Compiler and on the Globalize runtime modules.

When formatting or parsing, there's actually a two step process: (a) the
formatter (or parser) creation and (b) its execution, where creation takes
considerably more time (more expensive) than execution. The difference is an
order of magnitude. In the creation phase, Globalize traverses the CLDR tree,
processes data (e.g., expands date patterns, parses plural rules, etc), and
returns a function that actually executes the formatting or parsing.

Your compiled formatters and parsers allow you to skip a big part of the library
and also allow you to skip loading CLDR data. Because, they have already been
created.

The compiler generates a "snapshot" of your formatters and parsers, so you can
skip the creation step in real-time. In other words, you get smaller and faster
code for production.


## Running the example

### Development mode

1. Point your browser at `./development.html`. Note that Cldrjs and CLDR data
are required, because the formatters are created dynamically.
1. Understand the demo by reading the source code. We have comments there for
you.

### Production mode

1. Install `globalize-compiler` by running `npm install`.
1. Compile the application formatters by running `npm run build`. See
`package.json` to understand the actual shell command that is used. For more
information about the compiler, see the [Globalize Compiler
documentation](https://github.com/jquery-support/globalize-compiler#README).
1. Point your browser at `./production.html`. Note that we don't need Cldrjs nor
CLDR data in production here.
1. Understand the demo by reading the source code. We have comments there for
you.

