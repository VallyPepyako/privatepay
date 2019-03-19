export const getClassName = (block, modifiers) => {
		if(modifiers) {
			return block + modifiers.split(',').map(modifier => " " + block + "--" + modifier)
		} else {
			return block
		}
}