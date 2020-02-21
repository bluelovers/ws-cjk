/**
 * Created by user on 2020/2/22.
 */

import list from './lib/list';

export function fixZhHarmony(text: string)
{
	return list.reduce((text, [s, r]) => {
		return text.replace(s, r as string)
	}, text)
}

export default fixZhHarmony
