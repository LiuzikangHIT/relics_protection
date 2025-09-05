// 入口A
export const routeA = {
  name: 'A',
  children: [
    {
      name: 'exhibit',
      children: [
        {
          name: 'bronze',
          children: [
            {
              name: 'calligraphy',
              children: [
                {
                  name: 'ceramics',
                  children: [
                    {
                      name: 'sculpture',
                      children: [
                        {
                          name: 'collection',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'ceramics',
              children: [
                {
                  name: 'sculpture',
                  children: [
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'collection',
                  children: [
                    {
                      name: 'B',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              name: 'collection',
              children: [
                {
                  name: 'B',
                  children: []
                },
                {
                  name: 'sculpture',
                  children: [
                    {
                      name: 'ceramics',
                      children: [
                        {
                          name: 'calligraphy',
                          children: [
                            {
                              name: 'showings',
                              children: [
                                {
                                  name: 'A',
                                  children: []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: 'showings',
                          children: [
                            {
                              name: 'A',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'calligraphy',
          children: [
            {
              name: 'ceramics',
              children: [
                {
                  name: 'sculpture',
                  children: [
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        },
                        {
                          name: 'bronze',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'bronze',
                  children: [
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'B',
                      children: []
                    }
                  ]
                },
                {
                  name: 'collection',
                  children: [
                    {
                      name: 'B',
                      children: []
                    },
                    {
                      name: 'bronze',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'showings',
      children: [
        {
          name: 'exhibit',
          children: [
            {
              name: 'bronze',
              children: [
                {
                  name: 'B',
                  children: []
                },
                {
                  name: 'collection',
                  children: [
                    {
                      name: 'B',
                      children: []
                    },
                    {
                      name: 'sculpture',
                      children: [
                        {
                          name: 'ceramics',
                          children: [
                            {
                              name: 'calligraphy',
                              children: [
                                {
                                  name: 'A',
                                  children: []
                                }
                              ]
                            },
                            {
                              name: 'A',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'ceramics',
                  children: [
                    {
                      name: 'sculpture',
                      children: [
                        {
                          name: 'collection',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'calligraphy',
              children: [
                {
                  name: 'ceramics',
                  children: [
                    {
                      name: 'bronze',
                      children: [
                        {
                          name: 'collection',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        },
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'sculpture',
                      children: [
                        {
                          name: 'collection',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'calligraphy',
          children: [
            {
              name: 'ceramics',
              children: [
                {
                  name: 'bronze',
                  children: [
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'B',
                      children: []
                    }
                  ]
                },
                {
                  name: 'collection',
                  children: [
                    {
                      name: 'B',
                      children: []
                    },
                    {
                      name: 'bronze',
                      children: [
                        {
                          name: 'B',
                          children: []
                        },
                        {
                          name: 'exhibit',
                          children: [
                            {
                              name: 'A',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'sculpture',
                  children: [
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        },
                        {
                          name: 'bronze',
                          children: [
                            {
                              name: 'B',
                              children: []
                            },
                            {
                              name: 'exhibit',
                              children: [
                                {
                                  name: 'A',
                                  children: []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// 入口B
export const routeB = {
  name: 'B',
  children: [
    {
      name: 'collection',
      children: [
        {
          name: 'sculpture',
          children: [
            {
              name: 'ceramics',
              children: [
                {
                  name: 'bronze',
                  children: [
                    {
                      name: 'exhibit',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'calligraphy',
                  children: [
                    {
                      name: 'bronze',
                      children: [
                        {
                          name: 'B',
                          children: []
                        },
                        {
                          name: 'exhibit',
                          children: [
                            {
                              name: 'A',
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'showings',
                      children: [
                        {
                          name: 'A',
                          children: []
                        },
                        {
                          name: 'exhibit',
                          children: [
                            {
                              name: 'bronze',
                              children: [
                                {
                                  name: 'B',
                                  children: []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'exhibit',
                      children: [
                        {
                          name: 'A',
                          children: []
                        },
                        {
                          name: 'bronze',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'ceramics',
          children: [
            {
              name: 'bronze',
              children: [
                {
                  name: 'B',
                  children: []
                },
                {
                  name: 'exhibit',
                  children: [
                    {
                      name: 'A',
                      children: []
                    },
                    {
                      name: 'showings',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'calligraphy',
              children: [
                {
                  name: 'showings',
                  children: [
                    {
                      name: 'A',
                      children: []
                    },
                    {
                      name: 'exhibit',
                      children: [
                        {
                          name: 'bronze',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'exhibit',
                  children: [
                    {
                      name: 'A',
                      children: []
                    },
                    {
                      name: 'bronze',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'bronze',
                  children: [
                    {
                      name: 'B',
                      children: []
                    },
                    {
                      name: 'exhibit',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'bronze',
          children: [
            {
              name: 'exhibit',
              children: [
                {
                  name: 'A',
                  children: []
                },
                {
                  name: 'showings',
                  children: [
                    {
                      name: 'A',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              name: 'ceramics',
              children: [
                {
                  name: 'calligraphy',
                  children: [
                    {
                      name: 'A',
                      children: []
                    },
                    {
                      name: 'showings',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'exhibit',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'calligraphy',
              children: [
                {
                  name: 'ceramics',
                  children: [
                    {
                      name: 'exhibit',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'showings',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'exhibit',
                  children: [
                    {
                      name: 'A',
                      children: []
                    },
                    {
                      name: 'showings',
                      children: [
                        {
                          name: 'A',
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'showings',
                  children: [
                    {
                      name: 'A',
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'bronze',
      children: [
        {
          name: 'collection',
          children: [
            {
              name: 'sculpture',
              children: [
                {
                  name: 'ceramics',
                  children: [
                    {
                      name: 'calligraphy',
                      children: [
                        {
                          name: 'exhibit',
                          children: [
                            {
                              name: 'A',
                              children: []
                            }
                          ]
                        },
                        {
                          name: 'showings',
                          children: [
                            {
                              name: 'A',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          name: 'ceramics',
          children: [
            {
              name: 'calligraphy',
              children: [
                {
                  name: 'exhibit',
                  children: [
                    {
                      name: 'A',
                      children: []
                    }
                  ]
                },
                {
                  name: 'showings',
                  children: [
                    {
                      name: 'A',
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'exhibit',
          children: [
            {
              name: 'showings',
              children: [
                {
                  name: 'calligraphy',
                  children: [
                    {
                      name: 'ceramics',
                      children: [
                        {
                          name: 'collection',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        },
                        {
                          name: 'sculpture',
                          children: [
                            {
                              name: 'collection',
                              children: [
                                {
                                  name: 'B',
                                  children: []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'calligraphy',
              children: [
                {
                  name: 'ceramics',
                  children: [
                    {
                      name: 'collection',
                      children: [
                        {
                          name: 'B',
                          children: []
                        }
                      ]
                    },
                    {
                      name: 'sculpture',
                      children: [
                        {
                          name: 'collection',
                          children: [
                            {
                              name: 'B',
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};