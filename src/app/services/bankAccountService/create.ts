import { httpClient } from "../httpClient";

export interface BankAccountsParams {
  name: string
  initialBalance: number
  color: string
  type: 'CHECKING' | 'INVESTMENT'| 'CASH'
}

export async function create(params: BankAccountsParams) {
  const { data } = await httpClient.post('/bank-accounts', params)
  return data;
}
