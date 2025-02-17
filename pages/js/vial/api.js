// vial/macro.js
//
////////////////////////////////////
//
//  Vial Macros: Parsing, Pushing.
//
////////////////////////////////////

Vial.api = {
  what: 'vial',
  async updateKey(layer, row, col, keymask) {
    console.log('updating ', [layer, row, col], keymask);
    await Vial.USB.send(Vial.USB.CMD_VIA_SET_KEYCODE,
                    [layer, row, col,
                    ...BE16(keymask)]);
  },
  async updateMacros(kbinfo) {
    await Vial.macro.pushMacros(kbinfo);
  }
};
