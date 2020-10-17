export class ApiReturn {
    return: any;
    success: boolean;
    error: string;


}

const getResultOrError = (response: any, error?: string): ApiReturn => {
    var apiReturn = new ApiReturn();

    if (error) {
        apiReturn.error = error;
        apiReturn.success = false;
        apiReturn.return = response == null ? null : response;
    } else {
        apiReturn.error = null;
        apiReturn.success = true;
        apiReturn.return = response == null ? null : response;
    }

    return apiReturn;
}

export { getResultOrError }