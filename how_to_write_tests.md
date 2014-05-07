# How to Write Automated Tests

## 1) Limit Scope

A set of tests should focus on one page or one type of page.

If testing across a SET of pages, we should attempt to create
some sort of randomizer to pick from one of multiple possible
instances of that page -- that is, if we are testing
an add to cart function on a product page, each time
we run the tests, we should pick a *different product page.*

## 2) Assume Nothing

The tests should read their starting state from the page itself,
not be built upon any predefined assumptions or required state.

Tests (assert statements) should then use this initial state
to test against.

For example, if we are testing some CRUD operations on a list,
we should first read the items out of the list to document
its initial state before making modifications.   Then,
when we add an item, we ensure that the total number of items
is (initial_items +1), and when we then remove that item,
that the total number of items has reverted to (initial_items).

If we are testing a form, we should first load the form,
and record all current form values. Then, changes can
be made to those values, and we can test to ensure those
values were properly saved. Then, we can revert all the
values back to their original state, save again, and test
that everything matches.

## 3) Be The User

Testing functions in our code should seek to mirror user
actions.  For example, we should have clearly and semantically
labeled method calls like clickSubmitButton() and addItem().

This way, we can reuse and recombine these user actions into
different test and hopefully expose weaknesses in our
logic or the inter-connectedness of components.

Ideally, we can build up many variations of tests using
simple, modular user actions. For example, if we must
test a form submit several times, we should be able
to call one single submitForm() method from each test.

## 4) Test Everything, Especially Things That Shouldn't Happen

We should seek to test as many variables as possible
in each set of tests, valid and invalid.

For example, to test a list operation, we should test:

* Adding a valid item - did it add? did the new item match input?
* Adding an invalid item - did it NOT add? did a warning appear?
* Removing items - did it get removed? Is list correct? did a confirmation appear?
* Removing all items - did all get removed? is list now empty? did a nice empty state message appear?
* Modifying an existing item - did item get updated? Is list now correct?

When testing a form, we should test:

* Submitting with all fields valid - did it work?
* Testing submit once each PER REQUIRED OR VALIDATED FIELD while setting that field to blank or invalid and ensuring that the appropriate validation occurs - did it fail and did an appropriate message appear?
* Submitting a completely blank form - did it fail?

## 5) Create Descriptive Reports

When tests fail, the report should give information
about how the test failed.

For example:
```
Add Item failed: Items expected: 11, items found: 10.

Required Fields Failed: Field 'title' was blank but form submitted without error.
```

## 6) Leave no trace

Ideally, tests should be able to be run
many, many times, sometimes simultaenously,
without making permanent changes to the
content of the site.

When possible, have the tests login to
a specific test account whose data is not important.
Avoid using real user accounts!

We should try to avoid tests that delete existing content.

If an item is going to be added, remove it
at the end of the test.

If you need to test removing an item, add
one first!

## And remember - the feature isn't done until it can reliably pass all of its tests!
