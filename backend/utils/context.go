package utils

import (
	"context"
	"fizualizer/state"
)

// GetCtx Get the context
func GetCtx() context.Context {
	return state.GetContext()
}
