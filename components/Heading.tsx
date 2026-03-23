import { TextMask } from "@/animations";
import { TheadingProps } from "@/types";

export default function Heading({ title, classname }: TheadingProps) {
	return (
		<h1 className={`leading-tight text-[#000] dark:text-[#fff] tracking-tight ${classname}`}>
			<TextMask>{title}</TextMask>
		</h1>
	);
}
