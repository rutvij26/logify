interface ILogger {
	a?: string
}

/**
 * Logger Default export
 * @returns String saying "Hi I am logger"
 */
export const Logger = ({ a }: ILogger) => {
	console.log(a);
	return "Hi I am logger";
};