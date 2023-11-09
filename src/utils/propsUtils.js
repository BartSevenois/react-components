export const inputTypeClasses = (type, color) => {
  const inputClasses = [];

  if (type === 'default') {
    inputClasses.push(`bg-zinc-200 focus:ring hover:ring`);
    if (color === 'blue') inputClasses.push('ring-blue-400');
    else if (color === 'green') inputClasses.push('ring-green-400');
    else if (color === 'red') inputClasses.push('ring-red-400');
    else if (color === 'orange') inputClasses.push('ring-orange-400');
    else if (color === 'amber') inputClasses.push('ring-amber-400');
    else if (color === 'yellow') inputClasses.push('ring-yellow-400');
    else if (color === 'lime') inputClasses.push('ring-lime-400');
    else if (color === 'emerald') inputClasses.push('ring-emerald-400');
    else if (color === 'teal') inputClasses.push('ring-teal-400');
    else if (color === 'sky') inputClasses.push('ring-sky-400');
    else if (color === 'indigo') inputClasses.push('ring-indigo-400');
    else if (color === 'violet') inputClasses.push('ring-violet-400');
    else if (color === 'purple') inputClasses.push('ring-purple-400');
    else if (color === 'fuchsia') inputClasses.push('ring-fuchsia-400');
    else if (color === 'pink') inputClasses.push('ring-pink-400');
    else if (color === 'rose') inputClasses.push('ring-rose-400');
  }
  else if (type === 'underline') inputClasses.push('border-b-2');
  else if (type === 'border') inputClasses.push('border-2');

  if (['underline', 'border'].includes(type)) {
    if (color === 'blue') inputClasses.push('focus:border-blue-400 hover:border-blue-400');
    else if (color === 'red') inputClasses.push('focus:border-red-400 hover:border-red-400');
    else if (color === 'orange') inputClasses.push('focus:border-orange-400 hover:border-orange-400');
    else if (color === 'amber') inputClasses.push('focus:border-amber-400 hover:border-amber-400');
    else if (color === 'yellow') inputClasses.push('focus:border-yellow-400 hover:border-yellow-400');
    else if (color === 'lime') inputClasses.push('focus:border-lime-400 hover:border-lime-400');
    else if (color === 'emerald') inputClasses.push('focus:border-emerald-400 hover:border-emerald-400');
    else if (color === 'teal') inputClasses.push('focus:border-teal-400 hover:border-teal-400');
    else if (color === 'sky') inputClasses.push('focus:border-sky-400 hover:border-sky-400');
    else if (color === 'indigo') inputClasses.push('focus:border-indigo-400 hover:border-indigo-400');
    else if (color === 'violet') inputClasses.push('focus:border-violet-400 hover:border-violet-400');
    else if (color === 'purple') inputClasses.push('focus:border-purple-400 hover:border-purple-400');
    else if (color === 'fuchsia') inputClasses.push('focus:border-fuchsia-400 hover:border-fuchsia-400');
    else if (color === 'pink') inputClasses.push('focus:border-pink-400 hover:border-pink-400');
    else if (color === 'rose') inputClasses.push('focus:border-rose-400 hover:border-rose-400');
  }
  
  return inputClasses;
}