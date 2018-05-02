# discord.format

## How does it work?
The function takes a string as a parameter and uses REGEX to identify and replace substrings under the following conditions:

- \*\*Text\*\* results in \<b>Text\</b> --> **Text**
- \*Text\* results in \<i>Text\</i> --> *Text*
- \_\_Text\_\_ results in \<u>Text\</u> --> insert underlined text here
- \~\~Text\~\~ results in \<s>Text\</s> --> ~~Text~~

The conditions can be combined!
