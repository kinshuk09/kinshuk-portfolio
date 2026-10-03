import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  profile,
  experiences,
  expertise,
  certifications,
  navigation,
} from '../src/data/profile.js';
import { lifecycle, scenarios } from '../src/data/architecture.js';
test('contact and history stay grounded in the supplied resume', () => {
  assert.equal(profile.email, 'kinshuk09@gmail.com');
  assert.equal(experiences.length, 4);
  assert.equal(certifications.length, 4);
  assert.match(experiences.find((e) => e.id === 'wipro').bullets.join(' '), /platform evaluation/);
  assert.match(experiences.find((e) => e.id === 'adobe').bullets.join(' '), /pilot team/);
  assert.ok(!JSON.stringify(profile).includes('8527074263'));
});
test('interactive navigation and scenarios have unique stable identities', () => {
  for (const items of [experiences, expertise, lifecycle, scenarios])
    assert.equal(new Set(items.map((i) => i.id)).size, items.length);
  assert.equal(new Set(navigation.map(([id]) => id)).size, navigation.length);
  assert.equal(scenarios.length, 5);
  for (const scenario of scenarios) {
    assert.ok(scenario.nodes.length >= 5);
    assert.equal(scenario.considerations.length, 3);
    assert.ok(scenario.note);
  }
});
