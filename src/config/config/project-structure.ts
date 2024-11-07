export const PROJECT_STRUCTURE = {
  "root": {
    "src": {
      "description": "Source root",
      "files": {},
      "config": {
        "description": "Configuration files",
        "files": {
          "paths.ts": "TypeScript module"
        },
        "config": {
          "description": "Configuration files",
          "files": {
            "project-structure.ts": "TypeScript module"
          }
        },
        "scripts": {
          "description": "scripts module",
          "files": {
            "structure-watcher.ts": "TypeScript module"
          }
        }
      },
      "types": {
        "description": "Type definitions",
        "files": {
          "jest.d.ts": "TypeScript module"
        }
      },
      "lib": {
        "description": "Library code",
        "files": {},
        "firebase": {
          "description": "firebase module",
          "files": {
            "firebase.ts": "TypeScript module"
          }
        }
      },
      "modules": {
        "description": "modules module",
        "files": {},
        "auth": {
          "description": "auth module",
          "files": {
            "index.ts": "Module entry point"
          },
          "hooks": {
            "description": "React hooks",
            "files": {
              "useAuth.ts": "React hook",
              "useAuthForm.ts": "React hook"
            }
          },
          "types": {
            "description": "Type definitions",
            "files": {
              "index.ts": "Module entry point"
            }
          },
          "pages": {
            "description": "Page components",
            "files": {},
            "login": {
              "description": "login module",
              "files": {
                "page.tsx": "React component (Page)"
              }
            },
            "register": {
              "description": "register module",
              "files": {
                "page.tsx": "React component (Page)"
              }
            },
            "reset-password": {
              "description": "reset-password module",
              "files": {
                "page.tsx": "React component (Page)"
              }
            }
          },
          "components": {
            "description": "React components",
            "files": {},
            "forms": {
              "description": "forms module",
              "files": {},
              "LoginForm": {
                "description": "LoginForm module",
                "files": {
                  "LoginForm.test.tsx": "Test file",
                  "index.tsx": "Module entry point"
                }
              },
              "RegisterForm": {
                "description": "RegisterForm module",
                "files": {
                  "RegisterForm.test.tsx": "Test file",
                  "index.tsx": "Module entry point"
                }
              },
              "ResetPasswordForm": {
                "description": "ResetPasswordForm module",
                "files": {
                  "ResetPasswordForm.test.tsx": "Test file",
                  "index.tsx": "Module entry point"
                }
              }
            }
          }
        },
        "main": {
          "description": "main module",
          "files": {
            "MIGRATION.md": "Migration guide",
            "README.md": "Documentation",
            "page.tsx": "React component (Page)"
          },
          "constants": {
            "description": "Constants",
            "files": {
              "index.ts": "Module entry point"
            }
          },
          "types": {
            "description": "Type definitions",
            "files": {
              "index.ts": "Module entry point"
            }
          },
          "components": {
            "description": "React components",
            "files": {},
            "adaptive": {
              "description": "adaptive module",
              "files": {},
              "FeaturesSection": {
                "description": "FeaturesSection module",
                "files": {
                  "README.md": "Documentation",
                  "index.tsx": "Module entry point"
                },
                "constants": {
                  "description": "Constants",
                  "files": {
                    "features.tsx": "React component"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "FeatureItem.test.tsx": "Test file",
                    "FeaturesSection.test.tsx": "Test file"
                  }
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                },
                "utils": {
                  "description": "Utility functions",
                  "files": {
                    "animations.ts": "TypeScript module"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "shared": {
                    "description": "shared module",
                    "files": {
                      "FeatureItem.tsx": "React component"
                    }
                  }
                }
              },
              "CallToAction": {
                "description": "CallToAction module",
                "files": {
                  "README.md": "Documentation",
                  "index.tsx": "Module entry point"
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "CallToAction.test.tsx": "Test file"
                  }
                },
                "utils": {
                  "description": "Utility functions",
                  "files": {
                    "animations.ts": "TypeScript module"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "Desktop.tsx": "React component"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "Mobile.tsx": "React component"
                    }
                  }
                }
              },
              "Header": {
                "description": "Header module",
                "files": {
                  "README.md": "Documentation",
                  "index.tsx": "Module entry point"
                },
                "constants": {
                  "description": "Constants",
                  "files": {
                    "navigation.ts": "TypeScript module"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "Header.test.tsx": "Test file"
                  }
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  }
                }
              },
              "Footer": {
                "description": "Footer module",
                "files": {
                  "README.md": "Documentation",
                  "index.tsx": "Module entry point",
                  "types.ts": "TypeScript module"
                },
                "constants": {
                  "description": "Constants",
                  "files": {
                    "footerSections.ts": "TypeScript module"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "Footer.test.tsx": "Test file",
                    "FooterSection.test.tsx": "Test file"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "shared": {
                    "description": "shared module",
                    "files": {
                      "FooterSection.tsx": "React component"
                    }
                  }
                }
              },
              "Hero": {
                "description": "Hero module",
                "files": {
                  "README.md": "Documentation",
                  "index.tsx": "Module entry point",
                  "types.ts": "TypeScript module"
                },
                "HeroButton": {
                  "description": "HeroButton module",
                  "files": {
                    "index.tsx": "Module entry point"
                  }
                },
                "constants": {
                  "description": "Constants",
                  "files": {
                    "animations.ts": "TypeScript module"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "Hero.test.tsx": "Test file"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  }
                }
              },
              "PricingPlans": {
                "description": "PricingPlans module",
                "files": {
                  "MIGRATION.md": "Migration guide",
                  "index.tsx": "Module entry point"
                },
                "constants": {
                  "description": "Constants",
                  "files": {
                    "plans.ts": "TypeScript module"
                  }
                },
                "hooks": {
                  "description": "React hooks",
                  "files": {
                    "usePricingLogic.ts": "React hook"
                  }
                },
                "styles": {
                  "description": "Style files",
                  "files": {
                    "index.module.css": "Styles"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "BillingToggle.test.tsx": "Test file",
                    "PlanCard.test.tsx": "Test file",
                    "setup.ts": "TypeScript module",
                    "usePricingLogic.test.ts": "Test file"
                  }
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "BillingToggle": {
                    "description": "BillingToggle module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "PlanCard": {
                    "description": "PlanCard module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  }
                }
              },
              "HowItWorks": {
                "description": "HowItWorks module",
                "files": {
                  "index.tsx": "Module entry point"
                },
                "hooks": {
                  "description": "React hooks",
                  "files": {
                    "useHowItWorks.ts": "React hook"
                  }
                },
                "styles": {
                  "description": "Style files",
                  "files": {
                    "index.module.css": "Styles"
                  }
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                },
                "utils": {
                  "description": "Utility functions",
                  "files": {
                    "steps.ts": "TypeScript module",
                    "steps.tsx": "React component"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Terminal": {
                    "description": "Terminal module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  }
                }
              },
              "Testimonials": {
                "description": "Testimonials module",
                "files": {
                  "MIGRATION.md": "Migration guide",
                  "index.tsx": "Module entry point"
                },
                "constants": {
                  "description": "Constants",
                  "files": {
                    "testimonials.ts": "TypeScript module"
                  }
                },
                "styles": {
                  "description": "Style files",
                  "files": {
                    "index.module.css": "Styles"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "Desktop.test.tsx": "Test file",
                    "Mobile.test.tsx": "Test file",
                    "TestimonialCard.test.tsx": "Test file"
                  }
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                },
                "components": {
                  "description": "React components",
                  "files": {},
                  "Desktop": {
                    "description": "Desktop module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "Mobile": {
                    "description": "Mobile module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  },
                  "TestimonialCard": {
                    "description": "TestimonialCard module",
                    "files": {
                      "index.tsx": "Module entry point"
                    }
                  }
                }
              }
            },
            "ui": {
              "description": "ui module",
              "files": {},
              "ScrollToTopButton": {
                "description": "ScrollToTopButton module",
                "files": {
                  "MIGRATION.md": "Migration guide",
                  "index.tsx": "Module entry point"
                },
                "hooks": {
                  "description": "React hooks",
                  "files": {
                    "useScrollToTop.ts": "React hook"
                  }
                },
                "styles": {
                  "description": "Style files",
                  "files": {
                    "index.module.css": "Styles"
                  }
                },
                "tests": {
                  "description": "Test files",
                  "files": {
                    "ScrollToTopButton.test.tsx": "Test file",
                    "useScrollToTop.test.ts": "Test file"
                  }
                },
                "types": {
                  "description": "Type definitions",
                  "files": {
                    "index.ts": "Module entry point"
                  }
                }
              }
            }
          }
        },
        "shared": {
          "description": "shared module",
          "files": {},
          "hoc": {
            "description": "hoc module",
            "files": {
              "withAdaptive.tsx": "React component",
              "withMemoization.tsx": "React component"
            }
          },
          "hooks": {
            "description": "React hooks",
            "files": {
              "useMediaQuery.ts": "React hook",
              "useScreenSize.ts": "React hook"
            }
          },
          "utils": {
            "description": "Utility functions",
            "files": {
              "cn.ts": "TypeScript module"
            }
          },
          "ui": {
            "description": "ui module",
            "files": {},
            "AuthLayout": {
              "description": "AuthLayout module",
              "files": {
                "index.tsx": "Module entry point"
              }
            },
            "button": {
              "description": "button module",
              "files": {
                "index.tsx": "Module entry point",
                "types.ts": "TypeScript module",
                "variants.ts": "TypeScript module"
              }
            },
            "divider": {
              "description": "divider module",
              "files": {
                "MIGRATION.md": "Migration guide",
                "index.tsx": "Module entry point"
              },
              "tests": {
                "description": "Test files",
                "files": {
                  "Divider.test.tsx": "Test file"
                }
              },
              "styles": {
                "description": "Style files",
                "files": {
                  "index.module.css": "Styles"
                }
              }
            },
            "input": {
              "description": "input module",
              "files": {
                "index.tsx": "Module entry point"
              }
            }
          }
        }
      }
    }
  }
}