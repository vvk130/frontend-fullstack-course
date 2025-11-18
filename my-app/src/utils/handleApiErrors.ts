export function handleApiErrors(responseData: any, status?: number, statusText?: string) {
  if (responseData?.validationErrors) {
    alert(
      Object.entries(responseData.validationErrors)
        .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
        .join('\n')
    );
    return true;
  } else if (responseData?.errors) {
    alert(
      Object.entries(responseData.errors)
        .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
        .join('\n')
    );
    return true;
  } else if (status !== undefined && statusText !== undefined) {
    alert(`Error ${status}: ${statusText}`);
    return true;
  } else {
    alert('An unknown error occurred');
    return true;
  }
}

