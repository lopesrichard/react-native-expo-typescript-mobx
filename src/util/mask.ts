import { MaskService } from 'react-native-masked-text';

export enum MaskType {
  CPF,
  DATE,
}

export const mask = (type: MaskType, value: string): string => {
  switch (type) {
    case MaskType.CPF:
      return MaskService.toMask('cpf', value);
    case MaskType.DATE:
      return MaskService.toMask('datetime', value, { format: 'MM/DD/YYYY' });
  }
};
