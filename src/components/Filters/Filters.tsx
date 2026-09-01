'use client';

import { useState } from 'react';
import { useCampersFilters } from '@/hooks/useCampersFilters';

import Icon from '@/components/Icon/Icon';
import styles from './Filters.module.css';
import { CampersQueryParams } from '@/services/campers';

interface FiltersProps {
  onApply: (filters: Omit<CampersQueryParams, 'page'>) => void;
}

export default function Filters({ onApply }: FiltersProps) {
  const { data: options } = useCampersFilters();

  const [location, setLocation] = useState('');
  const [form, setForm] = useState('');
  const [engine, setEngine] = useState('');
  const [transmission, setTransmission] = useState('');

  const handleSearch = () => {
    onApply({
      location: location || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  const handleClear = () => {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    onApply({});
  };

  return (
    <div className={styles.filters}>
      <div className={styles.field}>
        <label htmlFor="location" className={styles.label}>
          Location
        </label>
        <div className={styles.inputWrapper}>
          <Icon
            name="map"
            width={16}
            height={16}
            className={
              location
                ? `${styles.inputIcon} ${styles.inputIconActive}`
                : styles.inputIcon
            }
          />
          <input
            id="location"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="City"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.allFilters}>
        <p className={styles.title}>Filters</p>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Camper form</legend>
          {options?.forms.map(formOption => (
            <label key={formOption} className={styles.radioLabel}>
              <input
                type="radio"
                name="form"
                value={formOption}
                checked={form === formOption}
                onChange={e => setForm(e.target.value)}
                className={styles.radio}
              />
              {formOption.replace('_', ' ')}
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Engine</legend>
          {options?.engines.map(engineOption => (
            <label key={engineOption} className={styles.radioLabel}>
              <input
                type="radio"
                name="engine"
                value={engineOption}
                checked={engine === engineOption}
                onChange={e => setEngine(e.target.value)}
                className={styles.radio}
              />
              {engineOption}
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Transmission</legend>
          {options?.transmissions.map(transmissionOption => (
            <label key={transmissionOption} className={styles.radioLabel}>
              <input
                type="radio"
                name="transmission"
                value={transmissionOption}
                checked={transmission === transmissionOption}
                onChange={e => setTransmission(e.target.value)}
                className={styles.radio}
              />
              {transmissionOption}
            </label>
          ))}
        </fieldset>
      </div>

      <button type="button" onClick={handleSearch} className={styles.searchBtn}>
        Search
      </button>
      <button type="button" onClick={handleClear} className={styles.clearBtn}>
        <Icon name="close" width={24} height={24} />
        Clear filters
      </button>
    </div>
  );
}
