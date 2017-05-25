# todolist_flux

How to clone:

```bash
git clone --branch lecture_56_inclassnotes-validate_input-with-disabled-button https://github.com/mottaquikarim/todolist_flux
```

## Requirements

1. In the TodoInput component, implement a check (via state) that will not allow user to dispatch an action if input field text is < 25 characters. If input field text *is* < 25 characters, it should display a red error message above the todo input field
2. In the TodoItem component, implement the same check as (1), but for this component, the `Update` button should be disabled until the number of characters in the text field is > 25.

For *both* situations, this check should occur on keypress (or keyup or keydown). If you adopt this approach, as *soon* as the number of characters satisfies the min limit requirement, the desired UI update will show up.
