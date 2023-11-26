import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';

interface InputCurrencyProps {
  error?: string
  value?: string
  onChange(value: string): void
}

export function InputCurrency({ error, value, onChange }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
      className='text-gray-800 text-[32px] font-bold translate-[-1px] outline-none w-full'
      onChange={event => onChange?.(event.target.value)}
      thousandSeparator="."
      decimalSeparator=','
      value={value}
    />

    {error && (
      <div className="flex gap-2 items-center mt-2 text-red-900">
        <CrossCircledIcon />
        {error}
        <span className=" text-xs"></span>
      </div>
    )}
    </div>
  )
}
