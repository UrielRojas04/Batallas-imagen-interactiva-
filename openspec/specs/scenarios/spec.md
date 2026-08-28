# scenarios Specifications

### Requirement: Fixed Main Character
The system SHALL display the main character image (`principal.jpg`) in a fixed position on the screen, persisting across all scenarios.

#### Scenario: User scrolls through scenarios
- **WHEN** the user scrolls horizontally to view different scenarios
- **THEN** the main character SHALL remain fixed on the viewport and not scroll away.

### Requirement: Horizontal Scenario Strip
The system SHALL layout the scenarios (`escenario normal.jpg`, `escenario espiritual.png`) horizontally side by side.

#### Scenario: Continuous horizontal navigation
- **WHEN** the application loads
- **THEN** the normal scenario SHALL be visible first, and scrolling to the right SHALL reveal the spiritual scenario.

### Requirement: Background Assets and Parallax
The system SHALL render background images and foreground objects at their respective positions, optionally applying a parallax factor to their horizontal translation based on `--scroll-x`.

#### Scenario: Rendering Spiritual Scenario
- **WHEN** the user is viewing the spiritual scenario
- **THEN** the angels (`angel 1.png`, `angel 2.png`) and demons (`demonio 1.png`, `demonio 2.png`) SHALL be displayed over the background.
