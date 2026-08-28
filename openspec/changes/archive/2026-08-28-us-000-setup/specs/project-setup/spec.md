## ADDED Requirements

### Requirement: Vite Base Path Configuration
The system SHALL use the correct repository name as the base path in Vite to ensure that all assets are correctly resolved when deployed to GitHub Pages.

#### Scenario: Production Build Asset Loading
- **WHEN** the application is built for production
- **THEN** all asset references (like images) SHALL be prefixed with the correct base path so they load from the sub-directory in GitHub Pages.

### Requirement: Global Styles Reset
The system SHALL have a global CSS reset to ensure consistent rendering across mobile devices.

#### Scenario: Mobile Viewport Rendering
- **WHEN** the application loads on any device
- **THEN** all elements SHALL have `box-sizing: border-box`, `margin: 0`, and `padding: 0`.

### Requirement: Application Context
The system SHALL expose a React Context Provider at the root level to manage global state (like active scenario and scroll offsets).

#### Scenario: Context Initialization
- **WHEN** the root component (`App.jsx` or `main.jsx`) renders
- **THEN** it SHALL wrap its children with `AppContext.Provider` without crashing.
