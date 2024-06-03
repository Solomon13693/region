import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const CurrencyFormatter = ({ amount, locale, currency }) => {
    return (
        <span>{formatCurrency(amount, locale, currency)}</span>
    );
};

export default CurrencyFormatter;
