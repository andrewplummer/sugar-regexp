// Extended type definitions for Sugar v2.0.2
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

interface RegExpConstructor {
  escape(str?: string): string;
}

interface RegExp {
  addFlags(flags: string): RegExp;
  getFlags(): string;
  removeFlags(flags: string): RegExp;
  setFlags(flags: string): RegExp;
}