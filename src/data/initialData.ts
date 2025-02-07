import { ProductLine, Invoice } from './types';

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
};

export const initialInvoice: Invoice = {
  logo: '', // Added missing property
  logoWidth: 100, // Adjusted the type to match the expected number
  title: '', // Added missing property
  name: '', // Added missing property
  companyName: 'Madan Gupta Vegetables and Fruits Supplier',
  companyAddress: '',
  companyAddress2: '', // Added missing property
  companyCountry: 'Bhopal',
  billTo: 'Bill To:', // Added missing property
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: 'RS',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
};
