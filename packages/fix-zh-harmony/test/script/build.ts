/**
 * Created by user on 2020/2/22.
 */

import source from '../../lib/source';
import { outputFile } from 'fs-extra';

let list = source
	.map(([s, r]) => {
		return [new RegExp(s, 'ug'), r]
	})
;

let text = list.reduce((a, [s, r]) => {

	a.push(`\t[${s.toString()}, '${r}'],`);

	return a;
}, [] as string[]).join('\n');

outputFile('../../lib/list.ts', `export default [\n${text}\n] as [RegExp, string][];`)

