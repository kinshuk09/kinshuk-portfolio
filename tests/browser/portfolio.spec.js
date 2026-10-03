import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('all architecture scenarios and career details are keyboard accessible', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'intelligent customer engagement',
  );
  const career = page.getByRole('tablist', { name: 'Select an employer' });
  await career.getByRole('tab', { name: /Wipro/ }).click();
  await expect(page.locator('#career-panel')).toContainText(
    'Hightouch-powered Iterable Smart Ingest',
  );
  await career.getByRole('tab', { name: /Wipro/ }).press('ArrowDown');
  await expect(career.getByRole('tab', { name: /Adobe/ })).toBeFocused();
  await expect(page.locator('#career-panel')).toContainText('pilot team');
  for (const name of ['Taboola', 'Genpact Headstrong']) {
    await career.getByRole('tab', { name: new RegExp(name) }).click();
    await expect(page.locator('#career-panel')).toContainText(name);
  }
  const scenarios = page.getByRole('tablist', { name: 'Architecture scenario' });
  for (const [name, headline] of [
    ['Customer Data Integration', 'Turn enterprise data'],
    ['Real-Time Journey', 'Connect the event'],
    ['SMS Integration', 'Design for what happens'],
    ['Mobile Push', 'Bridge the app'],
    ['Reporting Pipeline', 'Close the loop'],
  ]) {
    await scenarios.getByRole('tab', { name, exact: true }).click();
    await expect(page.locator('#scenario-panel')).toContainText(headline);
    await expect(page.locator('#scenario-panel .architecture-node')).toHaveCount(
      name === 'Real-Time Journey'
        ? 8
        : name === 'SMS Integration' || name === 'Mobile Push'
          ? 6
          : 5,
    );
  }
  await scenarios.getByRole('tab', { name: 'Reporting Pipeline' }).press('Home');
  await expect(scenarios.getByRole('tab', { name: 'Customer Data Integration' })).toBeFocused();
  for (const group of [
    'Marketing platforms',
    'Customer activation',
    'Data & integration',
    'Engineering & infrastructure',
  ]) {
    const button = page
      .locator('.technology-card button')
      .filter({ has: page.getByRole('heading', { name: group, exact: true }) });
    if ((await button.getAttribute('aria-expanded')) === 'false') await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
  const pdf = await page.request.get('/Kinshuk_Goel_Resume.pdf');
  expect(pdf.ok()).toBeTruthy();
  expect((await pdf.body()).subarray(0, 4).toString()).toBe('%PDF');
  expect(errors).toEqual([]);
});

test('mobile layout, menu focus, section navigation and reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Expertise', exact: false })
    .click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0);
  await expect(page.locator('#expertise')).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      `No overflow at ${width}px`,
    ).toBeTruthy();
  }
});

test('WCAG A/AA automated checks on desktop and mobile interactions', async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 750) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 25));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(700);
    let results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        description: v.description,
        nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
      })),
    ).toEqual([]);
    if (width === 390) {
      await page.getByRole('button', { name: 'Open menu' }).click();
      results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(
        results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
    }
  }
});
