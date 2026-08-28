# performance Specifications

### Requirement: Critical Image Preloading
The system SHALL preload the critical images required for the initial viewport to minimize LCP (Largest Contentful Paint) times.

#### Scenario: Application initialization
- **WHEN** the browser parses the HTML document
- **THEN** it SHALL discover `<link rel="preload">` tags for the main character and the initial background image, triggering their download before JS execution.
