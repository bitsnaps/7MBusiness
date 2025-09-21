import { defineConfig, /* presetWind, presetAttributify, presetIcons */ 
presetWind3 } from "unocss"

export default defineConfig({
    /* by default it comes with 'unocss/uno' which you can include in presets */
    presets: [
        presetWind3({
            dark: 'class'
        }),
        // presetWind(),
        // presetAttributify(),
        // presetIcons()
    ],
    rules: [
        // ['text-red', { color: 'red'}],
        /* Custom CSS rules with pattern matching (and you can do any logic in the function here) */
        // [/^my-(.*)$/, (result) => ({ color: result[1] })]
    ],
    /* You can define a custom shortcuts for any a set of attributes */
    shortcuts: [
        // { 'my-button': 'border border-gray/75 m-1 w25 px-4 py-2 bg-lime/75 rounded hover:bg-white/10'},
        // [ /^my-button-(.*)$/, ([, color]) => `border border-${color}/75 m-1 w25 px-4 py-2 bg-${color}/75 rounded hover:bg-${color}/10`],
    ]
})