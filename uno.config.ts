import preset from '@a-type/ui/uno-preset';
import { defineConfig, transformerVariantGroup } from 'unocss';

export default defineConfig({
	presets: [preset()],
	transformers: [transformerVariantGroup()],
});
