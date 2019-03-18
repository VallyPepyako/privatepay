export const getClassName = (block, modifiers) => {
		if(modifiers) {
			return block + modifiers.map(modifier => " " + block + "--" + modifier)
		} else {
			return block
		}
}