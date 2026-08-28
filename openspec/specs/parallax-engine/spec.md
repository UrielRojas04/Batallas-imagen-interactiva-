# parallax-engine Specifications

### Requirement: Horizontal Scroll Tracking
The system SHALL track the horizontal scroll position of the main scrolling container.

#### Scenario: User scrolls horizontally
- **WHEN** the user swipes or scrolls the main container horizontally
- **THEN** the system SHALL calculate the precise scroll offset (e.g. `scrollLeft`).

### Requirement: CSS Variable Injection
The system SHALL inject the scroll offset into the global CSS scope to allow declarative animations.

#### Scenario: Scroll Variable Update
- **WHEN** the scroll position changes
- **THEN** the system SHALL update the `--scroll-x` CSS property on the `:root` or document element using `requestAnimationFrame` for performance.
