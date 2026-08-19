# Screen Time Policy — iOS UI Review

GitHub Pages向けのProduction UIレビュー成果物です。Webモックではなく、Production AppをiOS Simulatorで実行し、XCUITestによる実操作を `simctl recordVideo` で収録しています。

- Source commit: `06ffab5ea922d615fe0643c2ac984a1a337d0764`
- Simulator: iPhone 16 Pro / iOS 18.4
- UI test: `OnboardingUITests.testProductLedOnboardingHandsSelectedGoalIntoGuidedDraft`
- Result: pass (1 capture test, 0 failures)
- Specification: `docs/specs/2026-08-19_product_led_onboarding.md`
- ADR: `docs/ADR/0005_product_led_onboarding_and_progressive_disclosure.md`
- GitHub Actions: 不使用
