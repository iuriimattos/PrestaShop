/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

const {$} = window;

/**
 * Class is responsible for handling Grid events
 */
export default class Grid {
  /**
   * Grid id
   *
   * @param {string} id
   */
  constructor(id) {
    this.id = id;
    this.$container = $(`#${this.id}_grid`);
  }

  /**
   * Get grid id
   *
   * @returns {string}
   */
  getId() {
    return this.id;
  }

  /**
   * Get grid container
   *
   * @returns {jQuery}
   */
  getContainer() {
    return this.$container;
  }

  /**
   * Get grid header container
   *
   * @returns {jQuery}
   */
  getHeaderContainer() {
    return this.$container.closest('.js-grid-panel').find('.js-grid-header');
  }

  /**
   * Extend grid with external extensions
   *
   * @param {object} extension
   */
  addExtension(extension) {
    extension.extend(this);
  }
}
