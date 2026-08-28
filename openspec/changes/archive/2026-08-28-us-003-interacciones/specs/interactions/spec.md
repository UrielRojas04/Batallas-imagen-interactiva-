## ADDED Requirements

### Requirement: Interactive Foreground Objects
The system SHALL allow foreground objects in the scenarios (angels, demons) to be interacted with via click or touch.

#### Scenario: Object interaction animation
- **WHEN** the user clicks or taps on an interactive object (angel or demon)
- **THEN** the object SHALL play a short visual animation (e.g. scale up or shake) to acknowledge the interaction.

### Requirement: Independent Object State
The system SHALL ensure that interactions with one object do not trigger animations on other objects.

#### Scenario: Single object interaction
- **WHEN** the user taps an angel
- **THEN** only that specific angel SHALL animate, while all other angels and demons remain in their default visual state.
