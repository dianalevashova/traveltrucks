'use client';

import { useState } from 'react';
import { useCampersFilters } from '@/hooks/useCampersFilters';

import Icon from '@/components/Icon/Icon';
import styles from './Filters.module.css';

interface FilterValues {
  location: string;
  form: string;
  engine: string;
  transmission: string;
}
interface FiltersProps {
  values: FilterValues;
  onChange: (values: FilterValues) => void;
  onSearch: () => void;
  onClear: () => void;
}

export default function Filters({
  values,
  onChange,
  onSearch,
  onClear,
}: FiltersProps) {
  const { data: options } = useCampersFilters();
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
              values.location
                ? `${styles.inputIcon} ${styles.inputIconActive}`
                : styles.inputIcon
            }
          />
          <input
            id="location"
            type="text"
            value={values.location}
            onChange={e => onChange({ ...values, location: e.target.value })}
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
                checked={values.form === formOption}
                onChange={e => onChange({ ...values, form: e.target.value })}
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
                checked={values.engine === engineOption}
                onChange={e => onChange({ ...values, engine: e.target.value })}
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
                checked={values.transmission === transmissionOption}
                onChange={e =>
                  onChange({ ...values, transmission: e.target.value })
                }
                className={styles.radio}
              />
              {transmissionOption}
            </label>
          ))}
        </fieldset>
      </div>

      <button type="button" onClick={onSearch} className={styles.searchBtn}>
        Search
      </button>
      <button type="button" onClick={onClear} className={styles.clearBtn}>
        <Icon name="close" width={24} height={24} />
        Clear filters
      </button>
    </div>
  );
}
