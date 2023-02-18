import { Switch } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
export const Toggle: React.FC<{
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}> = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-gray-500' : 'bg-slate-800'}
            relative inline-flex h-[30px] w-[62px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Set dark mode</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-8' : 'translate-x-0'}
              pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};
