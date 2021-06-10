import React from 'react';

export function changeForm(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  return {
    type: e.target.dataset.actionType as string,
    e
  }
}