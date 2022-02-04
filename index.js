// open regex website to practice
// https://regexr.com

// Let's begin
// 1. clear text on website
// 2. clear regex at top
// 3. Type: How now brown cow

// select "cow" with regex
// /cow/g

// regex is defined inside forward slashes
// Note: regex patterns slightly differ across languages - we are dealing with regex for javascript

// flags
// set on top right
// g is global (acess anywhere in string)

// change text to be:
// 'Brown cow' is an 18th century description for a barrel of beer. The saying probably originated as a way of calling for another round of drinks. An early example can be found in Scottish author Allan Ramsay's play The Gentle Shepherd (1725): ... Although 'brown cow' is now an obsolete term the saying lives on.
// with g (global) on (default) all "cows" are selected, off and only one is selected
// note: we could use case insensitive and others but let's talk today just about the global flag as that is the most used

// so far with what we know RegEx is not very useful
// let's change that now

// + (one or more)
// how could you find all patterns where we have a "l" followed by another "l"?
// /l+/g (match "l" or more than one "l")

// ? (optional)
// /le?/g (find l and optional le)

// * (0 or more)
// /le*/g

// . (matches anything at all except for new line)
// /....le...../g

// escaping
// How could we find all periods in our selection?
// /\./g

// \w (match any word character)
// /\w/g (all words)

// \s (spaces)
// /\s/g

/// negatives \S (not a space) and \W (not a word)

// min and max with {}
// find all words that 4 or more charcters and not more than 7
// /w{4,7}/g

// any string that begins with b or c and has "e" inside it
// /[ac]e/g

// find all letters that hafe a to z lower and uppercase (ranges)
// /[a-zA-Z]/g
// all words that end with d /[a-zA-Z]d/g

// find all numbers /[0-9]/g

// group ()
/// find all upper or lowercase b's /(b|B)/g

// match beginning of line with carrot symbol ^
// /^o/g (doesn't work because we are treating this text as one long string) but if we use the multiline flag we will find origininated (if you add a return)
// /^o/gm

// /^(o|S|n)/gm

// $ match end of statement
// turn off multi line
// remove all returns
// find on. at end with /on.$/g
