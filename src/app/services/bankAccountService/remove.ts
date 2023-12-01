import { httpClient } from "../httpClient";

export async function remove(bankAccount: string) {
  const { data } = await httpClient.delete(`bank-accounts/${bankAccount}`)
  return data;
}
