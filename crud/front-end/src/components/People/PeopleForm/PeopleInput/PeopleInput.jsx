import { IMaskInput } from 'react-imask';

export default function PeopleInput({label, mask, value, onChange, ...rest}) {
  const handleChange = (val) => onChange(val);
  return (
    <div>
      <label htmlFor={rest.id}>{label}</label>
      {
        mask ? (
          <IMaskInput
            mask={mask}
            value={value}
            onAccept={(value, maskRef) => handleChange(maskRef.unmaskedValue)}
            {...rest}
          />
        ) : (
          <input
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...rest}
          />
        )
      }
    </div>
  )
}
