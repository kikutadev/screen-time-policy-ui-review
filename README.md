# Aimwill — iOS UI Review

GitHub Pages向けのProduction UIレビュー成果物です。Webモックではなく、Production AppをiOS Simulatorで実行し、XCUITestによる実操作を `simctl recordVideo` で収録しています。

- Source commit: `0a256f6`
- Simulator: iPhone 16 Pro / iOS 18.4
- UI test: `OnboardingUITests.testProductLedOnboardingHandsSelectedGoalIntoGuidedDraft`
- Result: pass (1 capture test, 0 failures)
- Specification: `docs/specs/2026-08-19_product_led_onboarding.md`
- ADR: `docs/ADR/0005_product_led_onboarding_and_progressive_disclosure.md`
- GitHub Actions: 不使用
