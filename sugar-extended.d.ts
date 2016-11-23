// Extended type definitions for Sugar v2.0.3
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

// <reference path="sugar.d.ts" />

interface RegExpConstructor {
  escape(str?: string): string;
}

interface RegExp {
  addFlags(flags: string): RegExp;
  getFlags(): string;
  removeFlags(flags: string): RegExp;
  setFlags(flags: string): RegExp;
}