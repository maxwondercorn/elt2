import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | lt foot', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    await render(hbs`{{lt-foot renderInPlace=true}}`);

    assert.dom('*').hasText('');

    // Template block usage:"
    await render(hbs`
      {{#lt-foot renderInPlace=true}}
        template block text
      {{/lt-foot}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
